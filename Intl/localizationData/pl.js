export default {
  locale: 'pl',
  messages: {
    siteTitle: 'MERN Blog Startowy',
    addPost: 'Dodaj post',
    switchLanguage: 'Zmień język',
    twitterMessage: 'Jesteśmy na Twitter',
    by: 'dodany przez',
    deletePost: 'Usuń post',
    createNewPost: 'Dodaj nowy post',
    authorName: 'Autor',
    postTitle: 'Nazwa posta',
    postContent: 'Treść',
    submit: 'Dodaj',
    comment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	}`,
    HTMLComment: `user <b style='font-weight: bold'>{name} </b> {value, plural,
    	  =0 {does not have <i style='font-style: italic'>any</i> comments}
    	  =1 {has <i style='font-style: italic'>#</i> comment}
    	  other {has <i style='font-style: italic'>#</i> comments}
    	}`,
    nestedDateComment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	} as of {date}`,
  },
};
