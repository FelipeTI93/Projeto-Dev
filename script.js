function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light e mudar a legenda da imagem
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "imagem de Mayk Brito sorrindo, ele está com oculos escuros e jaqueta preta, em um fundo azul",
    )
  } else {
    // se tiver sem light mode, manter a imagem e legenda normal
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "imagem de Mayk Brito sorrindo, ele está com oculos de grau e camisa preta, em um fundo amarelo.",
    )
  }
}
