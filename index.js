var cryptedEmail = "zbp.yvnzt@yroobyrq.yhnc";

function sendMail(event)
{
	event.target.action = "https://formspree.io/" + cryptedEmail.replace(/[a-zA-Z]/g, function(c){return (String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26));}).split('').reverse().join("");
}
