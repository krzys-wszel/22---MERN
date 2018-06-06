import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getShowEditPost } from '../../../App/AppReducer';
import { injectIntl, FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchPost, editPostRequest } from '../../PostActions';
import { toggleEditPost } from '../../../App/AppActions';

// Import Selectors
import { getPost } from '../../PostReducer';

export class PostDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.post.name,
      title: this.props.post.title,
      content: this.props.post.content
    };

    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange (event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleEditPost () {
    this.props.toggleEditPost();
    this.props.editPostRequest(this.state);
  };

  renderPostForm () {
    return (
      <div className={styles['form-content']}>
        <h2 className={styles['form-title']}><FormattedMessage id="editPost" /></h2>

        <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']}
          name="name" value={this.state.name} onChange={this.handleInputChange}/>

        <input placeholder={this.props.intl.messages.postTitle} className={styles['form-field']}
          name="title" value={this.state.title} onChange={this.handleInputChange}/>

        <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']}
          name="content" value={this.state.content} onChange={this.handleInputChange}/>

        <a className={styles['post-submit-button']} href="#" onClick={this.handleEditPost}><FormattedMessage id="submit" /></a>
      </div>
    );
  };

  renderPost () {
    return (
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{this.props.post.title}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {this.props.post.name}</p>
        <p className={styles['post-desc']}>{this.props.post.content}</p>
        <h4 className={styles['post-votes']}><FormattedMessage id="votes: " /> {this.props.post.voteCount}</h4>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Helmet title={this.props.post.title} />
        <a className={styles['edit-post-button']} href="#" onClick={this.props.toggleEditPost}><FormattedMessage id="editPost" /></a>
        {
          this.props.showEditPost
            ? this.renderPostForm()
            : this.renderPost()
        }

      </div>
    );
  }
}

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    voteCount: PropTypes.number.isRequired
  }).isRequired,
  intl: PropTypes.shape({
    messages: PropTypes.shape({
      authorName: PropTypes.string.isRequired,
      postTitle: PropTypes.string.isRequired,
      postContent: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  showEditPost: PropTypes.bool.isRequired,
  toggleEditPost: PropTypes.func.isRequired,
  editPostRequest: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch, props) {
  return {
    toggleEditPost: () => dispatch(toggleEditPost()),
    editPostRequest: (post) => dispatch(editPostRequest(props.params.cuid, post)),
  };
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.cuid),
    showEditPost: getShowEditPost(state)
  };
}



// Actions required to provide data for this component to render in sever side.
PostDetailPage.need = [params => {
  return fetchPost(params.cuid);
}];




PostDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    voteCount: PropTypes.number.isRequired
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(PostDetailPage));