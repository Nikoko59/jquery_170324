$(function () {
  let listOne = $("#list1"),
    listTwo = $("#list2");
  let b = $("#list3");
  let tit = $("h2");
  let link = $("#link");
  let parOne = $("#parOne");

  let a = $("#custom");
  $(a).css({
    background: "red",
    textAlign: "center",
    fontSize: "1.5rem",
  });

  let button = $("#btn");
  $(button).click(function () {
    $(b).text("Python");

    if ($(b) === "React") {
      alert("Tu veux apprendre le JS ");
    } else {
      alert("Tu préfères Python");
    }

    let demo = $("#demo");

    $(demo).text("Le Jquery est un framework JavaScript");
    $(demo).css({
      color: "orange",
      background: "#070142",
      padding: "10px ",
    });

    let p = $("p:first");
    $(p).text("Il te faut ajouter et télécharger le document jquery.js ");

    $(listOne).text("Ruby");
    $(listTwo).text("Java");
    $(listOne).css({
      color: "red",
      "list-style-type": "none",
      fontSize: "1.5rem",
    });
    $(listTwo).css({
      color: "blue",
      fontSize: "1.5rem",
      "list-style-type": "none",
    });

    $(b).css({
      color: "green",
      "list-style-type": "none",
      fontSize: "1.5rem",
    });

    $(button).css({
      background: "black",
      color: "red",
      transition: "0.3s ease-in",
      padding: "10px",
    });

    $(buttonTwo).css({
      background: "red",
      color: "black",
      padding: "10px",
    });

    $(link).css({
      background: "orange",
      color: "#070142",
      padding: "10px",
      fontSize: "1.5rem",
      textDecoration: "none",
      fontWeight: 600,
    });
  });

  let buttonTwo = $("#btn2");
  $(buttonTwo).click(function () {
    $(a).css({
      background: "black",
      color: "red",
      padding: "10px",
    });
    $(b).text("Php avec echo'je suis un texte'");
    $(listOne).text("jquery $(function(){})");
    $(listTwo).text("JavaScript CamelCase ");

    $(tit).text("La Pratique permet de t'améliorer ");

    $(link).css({
      color: "blue",
      background: "black",
      fontWeight: 600,
      textDecoration: "none",
      fontSize: "1.5rem",
      padding: "10px",
    });

    $(link).attr({
      href: "https://jquery.com/",
    });
  });
});
