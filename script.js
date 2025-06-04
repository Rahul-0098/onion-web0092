function checkLogin() {
  const id = document.getElementById('loginId').value;
  const key = document.getElementById('passkey').value;
  if (id === 'Rik00799639' && key === 'Rik@00963900') {
    document.getElementById('loginPanel').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    runHackerEffect();
  } else {
    alert('Incorrect Login ID or Passkey');
  }
}

function runHackerEffect() {
  const text = [
    "Accessing system...",
    "Bypassing firewall...",
    "Extracting credentials...",
    "Decrypting password...",
    "Connected to bank database...",
    "Access granted ✔",
    "Welcome, Agent Rik."
  ];
  const el = document.getElementById("hackerText");
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += `\n${text[i]}`;
      i++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function fakeTransfer() {
  document.getElementById("transferStatus").innerText = "Transferring funds... 💸";
  setTimeout(() => {
    document.getElementById("transferStatus").innerText = "✅ Funds transferred (not really, just a prank!)";
  }, 2000);
}
