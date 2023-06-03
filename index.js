const scrollFunction = (value) => {
  if (value == "home") {
    document
      .getElementsByClassName("section1")[0]
      .scrollIntoView({ behavior: "smooth" });
  }
  if (value == "about") {
    var element = document.getElementsByClassName("section2")[0];
    var elementPosition = element.getBoundingClientRect().top;
    var headerOffset = 80;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  if (value == "work") {
    document
      .getElementsByClassName("section3")[0]
      .scrollIntoView({ behavior: "smooth" });
  }
};
