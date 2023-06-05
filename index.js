const scrollFunction = (value) => {
  if (value == "home") {
    document
      .getElementsByClassName("section1")[0]
      .scrollIntoView({ behavior: "smooth" });
  }
  if (value == "about") {
    const element = document.getElementsByClassName("section2")[0];
    const elementPosition = element.getBoundingClientRect().top;
    const headerOffset = 80;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
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
