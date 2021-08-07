(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=(a(16),a(17),a(3)),i=a(4),u=a(6),l=a(5),h=a(8),d=(a(18),a(1)),m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):h.b.error("Enter the name of your picture theme")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"on",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleQueryChange})]})})}}]),a}(n.Component),j=a(10),p=a(11),b=a.n(p),g=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)(b.a,{type:"Grid",color:"#00BFFF",height:80,width:80,timeout:5e3,className:"loader"})}}]),a}(n.Component);var y={getData:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,n="https://pixabay.com/api/",r="21953239-920783d9236e07918df0be6ca",c="".concat(n,"?q=").concat(e,"&page=").concat(t,"&key=").concat(r,"&image_type=photo&orientation=horizontal&per_page=").concat(a);return fetch(c).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(e)))}))}},f=function(e){var t=e.imageQuery,a=e.openModal;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(d.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return a(r)},children:Object(d.jsx)("img",{src:n,alt:c,className:"ImageGalleryItem-image"})},t)}))})},O=function(e){var t=e.onPushButton;return Object(d.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},v=document.querySelector("#modal-root"),x=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleOnKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleOnKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleOnKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:this.props.largeImage,alt:""})})}),v)}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],largeImage:"",page:1,error:"",showModal:!1,isLoading:!1,status:"idle"},e.openModal=function(t){e.setState({showModal:!0,largeImage:t})},e.closeModal=function(){e.setState({showModal:!1,largeImage:""})},e.fetchImages=function(){e.setState({isLoading:!0}),setTimeout((function(){y.getData(e.props.searchQuery,e.state.page).then((function(t){e.setState((function(e){return{images:[].concat(Object(j.a)(e.images),Object(j.a)(t.hits)),page:e.page+1,status:"resolved"}}))})).catch((function(t){return e.setState({error:t,status:"rejected"})})).finally((function(){return e.setState({isLoading:!1})}))}),100)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e.searchQuery!==this.props.searchQuery?(this.setState({images:[],page:1,status:"pending"}),this.fetchImages()):1!==this.state.page&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,r=e.isLoading,c=e.largeImage,o=e.showModal,s=e.status,i=this.props.searchQuery,u=t.length>0&&!r;return"idle"===s?Object(d.jsx)("p",{children:"Enter your request"}):"pending"===s?Object(d.jsx)(g,{}):"rejected"===s?Object(d.jsx)("p",{children:a.message}):"resolved"===s?Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("ul",{className:"ImageGallery",children:Object(d.jsx)(f,{imageQuery:t,openModal:this.openModal})}),0===t.length&&Object(d.jsx)("p",{children:'No images for your request "'.concat(i,'"')}),o&&Object(d.jsx)(x,{closeModal:this.closeModal,largeImage:c}),r&&Object(d.jsx)(g,{}),u&&Object(d.jsx)(O,{onPushButton:this.fetchImages})]}):void 0}}]),a}(n.Component),S=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleFormSubmit=function(t){e.setState({searchQuery:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(h.a,{autoClose:3e3}),Object(d.jsx)(w,{searchQuery:this.state.searchQuery})]})}}]),a}(n.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2b3bbcfb.chunk.js.map