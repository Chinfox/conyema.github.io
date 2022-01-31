const contactForm = document.getElementById('contact-form');
const statusBox = document.getElementById('status');


/** Method for showing notification message**/
const displayStatus = (status, { sender }) => {
  let txtSuccess = `${sender}, thanks for the message. I will reply as soon as possible`;
  let txtFailure = "Unable to send message. Please Check network connection and retry";
  let text = status === "success" ? txtSuccess : txtFailure;

  statusBox.textContent = text;
  statusBox.classList.toggle("d-none");

  setTimeout(() => {
		statusBox.classList.toggle("d-none");
		statusBox.textContent = "";
  }, 8000);
}

// contactForm.addEventListener('submit', sendMessage);

contactForm.onsubmit = async (event) => {
  event.preventDefault();
  const url = '/message';
  /**
   *  Data Formats: Multipart, JSON and Search Parameters 
   */
  const formData = new FormData(event.target);
  // const jsonData = JSON.stringify(Object.fromEntries(formData));
  const searchParams = new URLSearchParams(formData);
  
  // console.log("json: ", jsonData);
  // console.log("params: ", searchParams);

  let response = await fetch(url, {
    method: 'POST',
    // body: jsonData,
    body: searchParams,
    // headers: {
    //   "Content-Type": "application/json",
    // }
  });

  // console.log(data);
  let { status, data } = await response.json();
  
  displayStatus(status, data);
  contactForm.reset();
};
