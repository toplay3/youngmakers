(self.webpackChunkyoungmakersWebsite=self.webpackChunkyoungmakersWebsite||[]).push([[887],{5088:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var o=t(7294);function r(e){var n,t,r=(n=e,(t=(0,o.useRef)(n)).current=n,t);(0,o.useEffect)((function(){return function(){return r.current()}}),[])}},1887:(e,n,t)=>{"use strict";t.d(n,{Z:()=>be});var o,r=t(2122),a=t(9756),i=t(4184),s=t.n(i),c=t(9351),l=t(3004),d=t(7216),u=t(99);function f(e){if((!o&&0!==o||e)&&l.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),o=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return o}var m=t(2092),p=t(6895),v=t(5088),h=t(9471),g=t(7294);function E(e){void 0===e&&(e=(0,d.Z)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(n){return e.body}}var b=t(424),y=t(2950),w=t(5697),Z=t.n(w),N=t(3935),k=t(6454),C=t(8833),x=t(1132);function R(e,n){e.classList?e.classList.add(n):(0,x.Z)(e,n)||("string"==typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function O(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function F(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=O(e.className,n):e.setAttribute("class",O(e.className&&e.className.baseVal||"",n))}var S=t(3164);function T(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function A(e){var n;return T(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=T(e)?(0,d.Z)():(0,d.Z)(e),t=T(e)||n.defaultView;return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var D=["template","script","style"],H=function(e,n,t){[].forEach.call(e.children,(function(e){var o,r,a;-1===n.indexOf(e)&&(r=(o=e).nodeType,a=o.tagName,1===r&&-1===D.indexOf(a.toLowerCase()))&&t(e)}))};function M(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}const P=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,o=void 0===t||t,r=n.handleContainerOverflow,a=void 0===r||r;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=o,this.handleContainerOverflow=a,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return n=this.data,t=function(n){return-1!==n.modals.indexOf(e)},o=-1,n.some((function(e,n){return!!t(e)&&(o=n,!0)})),o;var n,t,o},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt((0,S.Z)(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),(0,S.Z)(n,t)},n.removeContainerStyle=function(e,n){Object.assign(n.style,e.style)},n.add=function(e,n,t){var o=this.modals.indexOf(e),r=this.containers.indexOf(n);if(-1!==o)return o;if(o=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,o=n.backdrop;H(e,[t,o],(function(e){return M(!0,e)}))}(n,e),-1!==r)return this.data[r].modals.push(e),o;var a={modals:[e],classes:t?t.split(/\s+/):[],overflowing:A(n)};return this.handleContainerOverflow&&this.setContainerStyle(a,n),a.classes.forEach(R.bind(null,n)),this.containers.push(n),this.data.push(a),o},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),o=this.data[t],r=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.classes.forEach(F.bind(null,r)),this.handleContainerOverflow&&this.removeContainerStyle(o,r),this.hideSiblingNodes&&function(e,n){var t=n.dialog,o=n.backdrop;H(e,[t,o],(function(e){return M(!1,e)}))}(r,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var a=o.modals[o.modals.length-1],i=a.backdrop;M(!1,a.dialog),M(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}();var B,I=function(e){var n;return"undefined"==typeof document?null:null==e?(0,d.Z)().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(n=e)?void 0:n.nodeType)&&e||null)};var L=(0,g.forwardRef)((function(e,n){var t=e.show,o=void 0!==t&&t,i=e.role,s=void 0===i?"dialog":i,c=e.className,d=e.style,u=e.children,f=e.backdrop,m=void 0===f||f,h=e.keyboard,w=void 0===h||h,Z=e.onBackdropClick,x=e.onEscapeKeyDown,R=e.transition,O=e.backdropTransition,F=e.autoFocus,S=void 0===F||F,T=e.enforceFocus,A=void 0===T||T,D=e.restoreFocus,H=void 0===D||D,M=e.restoreFocusOptions,L=e.renderDialog,z=e.renderBackdrop,j=void 0===z?function(e){return g.createElement("div",e)}:z,K=e.manager,W=e.container,_=e.containerClassName,U=e.onShow,V=e.onHide,$=void 0===V?function(){}:V,q=e.onExit,G=e.onExited,J=e.onExiting,Q=e.onEnter,X=e.onEntering,Y=e.onEntered,ee=(0,a.Z)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ne=function(e,n){var t=(0,g.useState)((function(){return I(e)})),o=t[0],r=t[1];if(!o){var a=I(e);a&&r(a)}return(0,g.useEffect)((function(){}),[n,o]),(0,g.useEffect)((function(){var n=I(e);n!==o&&r(n)}),[e,o]),o}(W),te=function(e){var n=e||(B||(B=new P),B),t=(0,g.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,o){return n.add(t.current,e,o)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:(0,g.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:(0,g.useCallback)((function(e){t.current.backdrop=e}),[])})}(K),oe=(0,k.Z)(),re=(0,C.Z)(o),ae=(0,g.useState)(!o),ie=ae[0],se=ae[1],ce=(0,g.useRef)(null);(0,g.useImperativeHandle)(n,(function(){return te}),[te]),l.Z&&!re&&o&&(ce.current=E()),R||o||ie?o&&ie&&se(!1):se(!0);var le=(0,p.Z)((function(){if(te.add(ne,_),ve.current=(0,y.Z)(document,"keydown",me),pe.current=(0,y.Z)(document,"focus",(function(){return setTimeout(ue)}),!0),U&&U(),S){var e=E(document);te.dialog&&e&&!(0,b.Z)(te.dialog,e)&&(ce.current=e,te.dialog.focus())}})),de=(0,p.Z)((function(){var e;te.remove(),null==ve.current||ve.current(),null==pe.current||pe.current(),H&&(null==(e=ce.current)||null==e.focus||e.focus(M),ce.current=null)}));(0,g.useEffect)((function(){o&&ne&&le()}),[o,ne,le]),(0,g.useEffect)((function(){ie&&de()}),[ie,de]),(0,v.Z)((function(){de()}));var ue=(0,p.Z)((function(){if(A&&oe()&&te.isTopModal()){var e=E();te.dialog&&e&&!(0,b.Z)(te.dialog,e)&&te.dialog.focus()}})),fe=(0,p.Z)((function(e){e.target===e.currentTarget&&(null==Z||Z(e),!0===m&&$())})),me=(0,p.Z)((function(e){w&&27===e.keyCode&&te.isTopModal()&&(null==x||x(e),e.defaultPrevented||$())})),pe=(0,g.useRef)(),ve=(0,g.useRef)(),he=R;if(!ne||!(o||he&&!ie))return null;var ge=(0,r.Z)({role:s,ref:te.setDialogRef,"aria-modal":"dialog"===s||void 0},ee,{style:d,className:c,tabIndex:-1}),Ee=L?L(ge):g.createElement("div",ge,g.cloneElement(u,{role:"document"}));he&&(Ee=g.createElement(he,{appear:!0,unmountOnExit:!0,in:!!o,onExit:q,onExiting:J,onExited:function(){se(!0);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];null==G||G.apply(void 0,n)},onEnter:Q,onEntering:X,onEntered:Y},Ee));var be=null;if(m){var ye=O;be=j({ref:te.setBackdropRef,onClick:fe}),ye&&(be=g.createElement(ye,{appear:!0,in:!!o},be))}return g.createElement(g.Fragment,null,N.createPortal(g.createElement(g.Fragment,null,be,Ee),ne))})),z={show:Z().bool,container:Z().any,onShow:Z().func,onHide:Z().func,backdrop:Z().oneOfType([Z().bool,Z().oneOf(["static"])]),renderDialog:Z().func,renderBackdrop:Z().func,onEscapeKeyDown:Z().func,onBackdropClick:Z().func,containerClassName:Z().string,keyboard:Z().bool,transition:Z().elementType,backdropTransition:Z().elementType,autoFocus:Z().bool,enforceFocus:Z().bool,restoreFocus:Z().bool,restoreFocusOptions:Z().shape({preventScroll:Z().bool}),onEnter:Z().func,onEntering:Z().func,onEntered:Z().func,onExit:Z().func,onExiting:Z().func,onExited:Z().func,manager:Z().instanceOf(P)};L.displayName="Modal",L.propTypes=z;const j=Object.assign(L,{Manager:P});t(2473);var K,W=t(1788),_=t(930),U=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",V=".sticky-top",$=".navbar-toggler",q=function(e){function n(){return e.apply(this,arguments)||this}(0,W.Z)(n,e);var t=n.prototype;return t.adjustAndStore=function(e,n,t){var o,r=n.style[e];n.dataset[e]=r,(0,S.Z)(n,((o={})[e]=parseFloat((0,S.Z)(n,e))+t+"px",o))},t.restore=function(e,n){var t,o=n.dataset[e];void 0!==o&&(delete n.dataset[e],(0,S.Z)(n,((t={})[e]=o,t)))},t.setContainerStyle=function(n,t){var o=this;if(e.prototype.setContainerStyle.call(this,n,t),n.overflowing){var r=f();(0,_.Z)(t,U).forEach((function(e){return o.adjustAndStore("paddingRight",e,r)})),(0,_.Z)(t,V).forEach((function(e){return o.adjustAndStore("marginRight",e,-r)})),(0,_.Z)(t,$).forEach((function(e){return o.adjustAndStore("marginRight",e,r)}))}},t.removeContainerStyle=function(n,t){var o=this;e.prototype.removeContainerStyle.call(this,n,t),(0,_.Z)(t,U).forEach((function(e){return o.restore("paddingRight",e)})),(0,_.Z)(t,V).forEach((function(e){return o.restore("marginRight",e)})),(0,_.Z)(t,$).forEach((function(e){return o.restore("marginRight",e)}))},n}(P),G=t(1138),J=t(4509),Q=((K={})[G.d0]="show",K[G.cn]="show",K),X=g.forwardRef((function(e,n){var t=e.className,o=e.children,i=(0,a.Z)(e,["className","children"]),c=(0,g.useCallback)((function(e){(0,J.Z)(e),i.onEnter&&i.onEnter(e)}),[i]);return g.createElement(G.ZP,(0,r.Z)({ref:n,addEndListener:h.Z},i,{onEnter:c}),(function(e,n){return g.cloneElement(o,(0,r.Z)({},n,{className:s()("fade",t,o.props.className,Q[e])}))}))}));X.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},X.displayName="Fade";const Y=X;var ee=t(4680);const ne=(0,ee.Z)("modal-body"),te=g.createContext({onHide:function(){}});var oe=t(6792),re=g.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,i=e.centered,c=e.size,l=e.children,d=e.scrollable,u=(0,a.Z)(e,["bsPrefix","className","centered","size","children","scrollable"]),f=(t=(0,oe.vE)(t,"modal"))+"-dialog";return g.createElement("div",(0,r.Z)({},u,{ref:n,className:s()(f,o,c&&t+"-"+c,i&&f+"-centered",d&&f+"-scrollable")}),g.createElement("div",{className:t+"-content"},l))}));re.displayName="ModalDialog";const ae=re,ie=(0,ee.Z)("modal-footer");var se={label:Z().string.isRequired,onClick:Z().func},ce=g.forwardRef((function(e,n){var t=e.label,o=e.onClick,i=e.className,c=(0,a.Z)(e,["label","onClick","className"]);return g.createElement("button",(0,r.Z)({ref:n,type:"button",className:s()("close",i),onClick:o},c),g.createElement("span",{"aria-hidden":"true"},"×"),g.createElement("span",{className:"sr-only"},t))}));ce.displayName="CloseButton",ce.propTypes=se,ce.defaultProps={label:"Close"};const le=ce;var de=g.forwardRef((function(e,n){var t=e.bsPrefix,o=e.closeLabel,i=e.closeButton,c=e.onHide,l=e.className,d=e.children,u=(0,a.Z)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);t=(0,oe.vE)(t,"modal-header");var f=(0,g.useContext)(te),m=(0,p.Z)((function(){f&&f.onHide(),c&&c()}));return g.createElement("div",(0,r.Z)({ref:n},u,{className:s()(l,t)}),d,i&&g.createElement(le,{label:o,onClick:m}))}));de.displayName="ModalHeader",de.defaultProps={closeLabel:"Close",closeButton:!1};const ue=de;var fe=("h4",g.forwardRef((function(e,n){return g.createElement("div",(0,r.Z)({},e,{ref:n,className:s()(e.className,"h4")}))})));const me=(0,ee.Z)("modal-title",{Component:fe});var pe,ve={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ae};function he(e){return g.createElement(Y,e)}function ge(e){return g.createElement(Y,e)}var Ee=g.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,i=e.style,E=e.dialogClassName,b=e.children,y=e.dialogAs,w=e["aria-labelledby"],Z=e.show,N=e.animation,k=e.backdrop,C=e.keyboard,x=e.onEscapeKeyDown,R=e.onShow,O=e.onHide,F=e.container,S=e.autoFocus,T=e.enforceFocus,A=e.restoreFocus,D=e.restoreFocusOptions,H=e.onEntered,M=e.onExit,P=e.onExiting,B=e.onEnter,I=e.onEntering,L=e.onExited,z=e.backdropClassName,K=e.manager,W=(0,a.Z)(e,["bsPrefix","className","style","dialogClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),_=(0,g.useState)({}),U=_[0],V=_[1],$=(0,g.useState)(!1),G=$[0],J=$[1],Q=(0,g.useRef)(!1),X=(0,g.useRef)(!1),Y=(0,g.useRef)(null),ee=(0,m.Z)(),ne=ee[0],re=ee[1],ae=(0,p.Z)(O);t=(0,oe.vE)(t,"modal"),(0,g.useImperativeHandle)(n,(function(){return{get _modal(){return ne}}}),[ne]);var ie=(0,g.useMemo)((function(){return{onHide:ae}}),[ae]);function se(){return K||(pe||(pe=new q),pe)}function ce(e){if(l.Z){var n=se().isContainerOverflowing(ne),t=e.scrollHeight>(0,d.Z)(e).documentElement.clientHeight;V({paddingRight:n&&!t?f():void 0,paddingLeft:!n&&t?f():void 0})}}var le=(0,p.Z)((function(){ne&&ce(ne.dialog)}));(0,v.Z)((function(){(0,u.Z)(window,"resize",le),Y.current&&Y.current()}));var de=function(){Q.current=!0},ue=function(e){Q.current&&ne&&e.target===ne.dialog&&(X.current=!0),Q.current=!1},fe=function(){J(!0),Y.current=(0,h.Z)(ne.dialog,(function(){J(!1)}))},me=function(e){"static"!==k?X.current||e.target!==e.currentTarget?X.current=!1:O():function(e){e.target===e.currentTarget&&fe()}(e)},ve=(0,g.useCallback)((function(e){return g.createElement("div",(0,r.Z)({},e,{className:s()(t+"-backdrop",z,!N&&"show")}))}),[N,z,t]),Ee=(0,r.Z)({},i,{},U);return N||(Ee.display="block"),g.createElement(te.Provider,{value:ie},g.createElement(j,{show:Z,ref:re,backdrop:k,container:F,keyboard:!0,autoFocus:S,enforceFocus:T,restoreFocus:A,restoreFocusOptions:D,onEscapeKeyDown:function(e){C||"static"!==k?C&&x&&x(e):(e.preventDefault(),fe())},onShow:R,onHide:O,onEnter:function(e){e&&(e.style.display="block",ce(e));for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];B&&B.apply(void 0,[e].concat(t))},onEntering:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];I&&I.apply(void 0,[e].concat(t)),(0,c.ZP)(window,"resize",le)},onEntered:H,onExit:function(e){Y.current&&Y.current();for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];M&&M.apply(void 0,[e].concat(t))},onExiting:P,onExited:function(e){e&&(e.style.display="");for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];L&&L.apply(void 0,t),(0,u.Z)(window,"resize",le)},manager:se(),containerClassName:t+"-open",transition:N?he:void 0,backdropTransition:N?ge:void 0,renderBackdrop:ve,renderDialog:function(e){return g.createElement("div",(0,r.Z)({role:"dialog"},e,{style:Ee,className:s()(o,t,G&&t+"-static"),onClick:k?me:void 0,onMouseUp:ue,"aria-labelledby":w}),g.createElement(y,(0,r.Z)({},W,{role:"document",onMouseDown:de,className:E}),b))}}))}));Ee.displayName="Modal",Ee.defaultProps=ve,Ee.Body=ne,Ee.Header=ue,Ee.Title=me,Ee.Footer=ie,Ee.Dialog=ae,Ee.TRANSITION_DURATION=300,Ee.BACKDROP_TRANSITION_DURATION=150;const be=Ee}}]);