const trivia = {
  title: "RatherLabs Trivia",
  image: "https://48tools.com/wp-content/uploads/2015/09/shortlink.png",
  questions: [
    {
      text: "¿Qué es un bloque génesis?",
      image:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      lifetimeSeconds: 10000,
      options: [
        { text: "El primer bloque de una Blockchain", correct: true },
        {
          text: "Un famoso bloque que codificó un hash del Libro del Génesis en la cadena de bloques",
          correct: false,
        },
        {
          text: "El primer bloque, después de cada reducción a la mitad del bloque",
          correct: false,
        },
        { text: "La 2ª transacción de una Blockchain", correct: false },
      ],
    },
    {
      text: "El cifrado asimétrico utiliza:",
      image:
        "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
      lifetimeSeconds: 10000,
      options: [
        { text: "Sólo claves públicas", correct: false },
        { text: "Sólo claves privadas", correct: false },
        { text: "Claves privadas y públicas", correct: true },
        { text: "Prueba de participación", correct: false },

      ],
    },
    {
      text: "¿Qué es el Proof of Stake?",
      image:
        "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
      lifetimeSeconds: 10000,
      options: [
        { text: "Un certificado necesario para utilizar la cadena de bloques", correct: false },
        { text: "Una contraseña necesaria para acceder a un intercambio", correct: false },
        { text: "Cómo se hacen las claves privadas", correct: false },
        { text: "Un protocolo de verificación de transacciones y bloques", correct: true },

      ],
    },
    {
      text: "¿Qué es una dApp?",
      image:
        "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
      lifetimeSeconds: 10000,
      options: [
        { text: "Un tipo de criptomoneda", correct: false },
        { text: "Un condimento", correct: false },
        { text: "Un tipo de cadena de bloques", correct: false },
        { text: "Una aplicación descentralizada", correct: true },

      ],
    },
  ],
};

export default trivia;
