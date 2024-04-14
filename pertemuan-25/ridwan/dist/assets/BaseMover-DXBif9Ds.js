import{a0 as w,I as F,J as z,b as P,G as m,W as T}from"./register-B1JstNQ6.js";import"./bootstrap.esm-BouezZmv.js";const r=.5,h=0,f=1,D=60,M=0,S=.01;function V(n){const o=n.initialPosition,{dx:e,dy:s}=w(o,n.position),a=Math.abs(e),t=Math.abs(s),{maxDistance:i}=n.retina,y=i.horizontal,v=i.vertical;if(!y&&!v)return;const d=(y&&a>=y)??!1,u=(v&&t>=v)??!1;if((d||u)&&!n.misplaced)n.misplaced=!!y&&a>y||!!v&&t>v,y&&(n.velocity.x=n.velocity.y*r-n.velocity.x),v&&(n.velocity.y=n.velocity.x*r-n.velocity.y);else if((!y||a<y)&&(!v||t<v)&&n.misplaced)n.misplaced=!1;else if(n.misplaced){const x=n.position,c=n.velocity;y&&(x.x<o.x&&c.x<h||x.x>o.x&&c.x>h)&&(c.x*=-F()),v&&(x.y<o.y&&c.y<h||x.y>o.y&&c.y>h)&&(c.y*=-F())}}function k(n,o,e,s,a,t){A(n,t);const i=n.gravity,y=i!=null&&i.enable&&i.inverse?-f:f;a&&e&&(n.velocity.x+=a*t.factor/(D*e)),i!=null&&i.enable&&e&&(n.velocity.y+=y*(i.acceleration*t.factor)/(D*e));const v=n.moveDecay;n.velocity.multTo(v);const d=n.velocity.mult(e);i!=null&&i.enable&&s>h&&(!i.inverse&&d.y>=h&&d.y>=s||i.inverse&&d.y<=h&&d.y<=-s)&&(d.y=y*s,e&&(n.velocity.y=d.y/e));const u=n.options.zIndex,x=(f-n.zIndexFactor)**u.velocityRate;d.multTo(x);const{position:c}=n;c.addTo(d),o.vibrate&&(c.x+=Math.sin(c.x*Math.cos(c.y)),c.y+=Math.cos(c.y*Math.sin(c.x)))}function I(n,o){const e=n.container;if(!n.spin)return;const s={x:n.spin.direction==="clockwise"?Math.cos:Math.sin,y:n.spin.direction==="clockwise"?Math.sin:Math.cos};n.position.x=n.spin.center.x+n.spin.radius*s.x(n.spin.angle),n.position.y=n.spin.center.y+n.spin.radius*s.y(n.spin.angle),n.spin.radius+=n.spin.acceleration;const a=Math.max(e.canvas.size.width,e.canvas.size.height),t=a*r;n.spin.radius>t?(n.spin.radius=t,n.spin.acceleration*=-f):n.spin.radius<M&&(n.spin.radius=M,n.spin.acceleration*=-f),n.spin.angle+=o*S*(f-n.spin.radius/a)}function A(n,o){var i;const e=n.options,s=e.move.path;if(!s.enable)return;if(n.lastPathTime<=n.pathDelay){n.lastPathTime+=o.value;return}const t=(i=n.pathGenerator)==null?void 0:i.generate(n,o);t&&n.velocity.addTo(t),s.clamp&&(n.velocity.x=z(n.velocity.x,-f,f),n.velocity.y=z(n.velocity.y,-f,f)),n.lastPathTime-=n.pathDelay}function E(n){return n.slow.inRange?n.slow.factor:f}function C(n){const o=n.container,e=n.options,s=e.move.spin;if(!s.enable)return;const a=s.position??{x:50,y:50},t=.01,i={x:a.x*t*o.canvas.size.width,y:a.y*t*o.canvas.size.height},y=n.getPosition(),v=P(y,i),d=m(s.acceleration);n.retina.spinAcceleration=d*o.retina.pixelRatio;const u=0;n.spin={center:i,direction:n.velocity.x>=u?"clockwise":"counter-clockwise",angle:n.velocity.angle,radius:v,acceleration:n.retina.spinAcceleration}}const G=2,O=1,B=1;class W{init(o){const e=o.options,s=e.move.gravity;o.gravity={enable:s.enable,acceleration:m(s.acceleration),inverse:s.inverse},C(o)}isEnabled(o){return!o.destroyed&&o.options.move.enable}move(o,e){var b,l;const s=o.options,a=s.move;if(!a.enable)return;const t=o.container,i=t.retina.pixelRatio;(b=o.retina).moveSpeed??(b.moveSpeed=m(a.speed)*i),(l=o.retina).moveDrift??(l.moveDrift=m(o.options.move.drift)*i);const y=E(o),v=o.retina.moveSpeed*t.retina.reduceFactor,d=o.retina.moveDrift,u=T(s.size.value)*i,x=a.size?o.getRadius()/u:O,c=e.factor||B,g=v*x*y*c/G,R=o.retina.maxSpeed??t.retina.maxSpeed;a.spin.enable?I(o,g):k(o,a,g,R,d,e),V(o)}}export{W as BaseMover};