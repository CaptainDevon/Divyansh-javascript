const url = `http://localhost:2040/personal-details/display`;

const takingInfo = async (event) => {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;

  const objectBody = {
    firstName,
    lastName,
    gender,
    age,
  };

  const reply = await sendUserData(objectBody);

  const description = document.createElement("h2");

  if (typeof reply === "string") {
    description.innerText = `Error: ${reply}`;
  } else {
    description.innerText = reply.frontEndMessage;
  }
  description.style.cssText = `
  justify-content:center;
  place-items:center;
  
  background: linear-gradient(
    to right, 
    hsl(98, 100%, 62%), 
    hsl(204, 100%, 59%)
  );

  
  background: linear-gradient(
    to right in oklch, 
    oklch(0.83 0.25 142), 
    oklch(0.75 0.3 250)
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-clip: text;
  color: transparent;
`;

  const card = document.getElementById("output");
  card.innerHTML = "";
  card.appendChild(description);
};

const sendUserData = async (objectBody) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectBody),
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (e) {
    return { error: e.message };
  }
};
