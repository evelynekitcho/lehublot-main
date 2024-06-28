function sendMessage() {
    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const datetime = document.getElementById('datetime').value;
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value;

    // Générer le lien WhatsApp avec les données
    const phoneNumber = '+22969675555'; // Remplacez par votre numéro WhatsApp (en format international sans le +)
    const text = `Nom: ${name}\nEmail: ${email}\nDate: ${datetime}\nCatégorie: ${category}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Rediriger vers le lien WhatsApp
    window.open(whatsappUrl, '_blank');
}