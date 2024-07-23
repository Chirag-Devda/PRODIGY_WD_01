const dropdownContainer = document.body.querySelector(
  ".Faqs_dropdowns_container"
);

// dropdown_Column_one

const dropdown_Column_one_Array = [
  {
    dropdown: 1,
    summary: "What is the duration of Internship?",
    content: "All our internships are for a period of 1 month only.",
  },
  {
    dropdown: 2,
    summary: " Can I complete multiple tracks together?",
    content: `We believe to provide an actual learning environment, we have
                  limited our internship offerings to 1 track per month for each
                  student. This allows students to explore the choosen track`,
  },
  {
    dropdown: 3,
    summary: "Is there any fees for the internship?",
    content: `The internship is completely free. However, a documentation
                  fee of ₹119 must be paid to cover the processing charges.`,
  },
  {
    dropdown: 4,
    summary: "When will I receive the Offer Letter?",
    content: `We process the Offer Letters at the mid & end of month in
                  batches. We request you to please wait in the mean time.
                  If you have received the Task Submission Email, we request you
                  to review your spam folder for the Offer Letter. Kindly
                  contact us via email if you are unable to find it.`,
  },
  {
    dropdown: 5,
    summary: "How to submit Tasks?",
    content: ` A Submission Form will be mailed to you 10-15 days after you
                  receive your Offer Letter.
                  For batches starting on the 1st of the month, the form will be
                  mailed between the 11th and 14th.
                  For batches starting on the 15th of the month, the form will
                  be mailed between the 26th and 29th.`,
  },
];
const dropdown_Column_two_Array = [
  {
    dropdown: 1,
    summary: "What is the criteria for selection?",
    content: "Determination to learn and grow is all what is needed.",
  },
  {
    dropdown: 2,
    summary: "When does the internships starts?",
    content: ` Determination to learn and grow is all what is needed.`,
  },
  {
    dropdown: 3,
    summary: "Is there any fees for the internship?",
    content: " All our internships are conducted in Virtual mode (Online).",
  },
  {
    dropdown: 4,
    summary: "CIN is showing Invalid",
    content:
      "The CIN will activate once you have been issued your Certificate of Completion.",
  },
  {
    dropdown: 5,
    summary: "When will I get the Certificate?",
    content:
      "The Certificate of Completion is sent after the end date on the Offer Letter. For batches starting on the 1st of the month, the Certificate is sent from 1st of next month.For batches starting on the 15th of the month, the Certificate is sent from 16th of next month.",
  },
];

// Generate FAQs Section with Array data

function generateDropdownHTML(data) {
  let html = "";
  for (let item of data) {
    html += `<details class="dropdown bg-white mb-[30px] rounded-md">
      <summary class="btn m-1 font-medium p-4 lg:p-8 text-lg cursor-pointer">
        ${item.summary}
      </summary>
      <ul class="menu dropdown-content">
        <li class="gray pr-[30px] pb-10 pl-12 lg:pl-24">
          ${item.content}
        </li>
      </ul>
    </details>
    `;
  }

  return html;
}

const dropdown_Column_one_html = generateDropdownHTML(
  dropdown_Column_one_Array
);
const dropdown_Column_two_html = generateDropdownHTML(
  dropdown_Column_two_Array
);

const container1 = document.getElementById("container-for-column-one");
container1.innerHTML = dropdown_Column_one_html;

const container2 = document.getElementById("container-for-column-two");
container2.innerHTML = dropdown_Column_two_html;

// Contact form Handling

let messages = []; // Array to store user data (form data objects)

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  // Create an object to store form data
  let formData = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  // Push the form data object to the messages array
  messages.push(formData);
  console.log(messages); // Check if data is stored correctly

  //clear the form fields
  contactForm.reset();

  // Submission message
  alert("Thank you for your submission!");
});
