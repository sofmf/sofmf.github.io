// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCEMfa1LbsrUgriUcJvIdHgvwMLCY_4_Zk",
    authDomain: "visitor-counter-efe06.firebaseapp.com",
    projectId: "visitor-counter-efe06",
    storageBucket: "visitor-counter-efe06.firebasestorage.app",
    messagingSenderId: "840136402073",
    appId: "1:840136402073:web:bcd0bbce9b85e30f5b0408",
    measurementId: "G-WCV8LCS2N5"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Display current date and time
  function updateDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const europeanFormat = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    document.getElementById('datetime').textContent = europeanFormat;
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime(); // Run immediately
  
  // Update visitor count in Firestore
  function updateVisitorCount() {
    const docRef = db.collection("visitors").doc("count");
  
    docRef.get().then((doc) => {
      let count = doc.exists ? doc.data().count : 0;
      count++;
  
      docRef.set({ count })
        .then(() => {
          document.getElementById('visitor-count').textContent = count;
        })
        .catch((error) => console.error("Error updating count:", error));
    });
  }
  
  updateVisitorCount();
  