(this.webpackJsonpcourse_project_01=this.webpackJsonpcourse_project_01||[]).push([[7],{309:function(e,t,o){e.exports={user:"Users_user__ikEGj",user_ava:"Users_user_ava__Mu2Dv",btn:"Users_btn__3wvY_",selectedPage:"Users_selectedPage__1xWpN",page:"Users_page__1i3jP",pages:"Users_pages__1l6HQ"}},329:function(e,t,o){"use strict";o.r(t);var n=o(18),r=o(19),s=o(20),a=o(21),l=o(0),i=o.n(l),c=o(10),u=o(309),p=o.n(u),d=o(28),h=function(e){return i.a.createElement("div",{className:p.a.user},i.a.createElement("div",null,i.a.createElement(d.b,{to:"/profile/".concat(e.id)},i.a.createElement("img",{className:p.a.user_ava,src:e.photo})),i.a.createElement("span",null,e.name)),i.a.createElement("span",null,e.country),e.canFollow?i.a.createElement("div",null,e.followed?i.a.createElement("button",{onClick:function(){return e.unfollow(e.id)},disabled:e.inFollowing},"UNFOLLOW"):i.a.createElement("button",{onClick:function(){return e.follow(e.id)},disabled:e.inFollowing},"FOLLOW")):i.a.createElement(i.a.Fragment,null))},f=o(69),g=o.n(f),b=o(327),m=function(e){Object(a.a)(o,e);var t=Object(s.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){var e=this,t=Math.ceil(this.props.totalCount/this.props.pageSize);return i.a.createElement("div",null,i.a.createElement(b.a,{page:this.props.currentPage,count:t,onChange:function(t,o){return e.props.getUsers(o)}}),this.props.users.map((function(t){return i.a.createElement(h,{key:t.id,id:t.id,name:t.name,country:t.country,followed:t.followed,canFollow:e.props.isAuth&&e.props.authorizedId!==t.id,photo:t.photos.small?t.photos.small:g.a,follow:e.props.onFollow.bind(void 0,t.id),unfollow:e.props.onUnfollow.bind(void 0,t.id),inFollowing:e.props.following.some((function(e){return e===t.id}))})})))}}]),o}(i.a.Component),w=o(43),_=o(24),j=o(136),O=function(e){Object(a.a)(o,e);var t=Object(s.a)(o);function o(){var e;Object(n.a)(this,o);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).loadUsers=function(t){e.props.fetchUsers(t,e.props.pageSize)},e}return Object(r.a)(o,[{key:"componentDidMount",value:function(){this.loadUsers(this.props.currentPage)}},{key:"render",value:function(){return this.props.isFetching?i.a.createElement(w.a,null):i.a.createElement(m,{totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onFollow:this.props.followUser,onUnfollow:this.props.unfollowUser,getUsers:this.loadUsers,following:this.props.following,isAuth:this.props.isAuth,authorizedId:this.props.authorizedId})}}]),o}(i.a.Component);t.default=Object(c.b)((function(e){return{users:Object(_.m)(e),totalCount:Object(_.n)(e),currentPage:Object(_.b)(e),pageSize:Object(_.i)(e),isFetching:Object(_.g)(e),following:Object(_.d)(e),authorizedId:Object(_.a)(e),isAuth:Object(_.f)(e)}}),{followUser:j.c,unfollowUser:j.d,fetchUsers:j.b})(O)}}]);
//# sourceMappingURL=7.a342a289.chunk.js.map