function init() {

    var info = document.querySelector(".info");
    var parts = document.querySelector(".parts");


    var infoaboutall = document.querySelector(".infoaboutall");
    var infoautor = document.querySelector(".infoautor");

    var phbl = document.querySelector(".phbl");
    var bate = document.querySelector(".bate");
    var stducr = document.querySelector(".stducr");
    var diisun = document.querySelector(".diisun");
    var veau = document.querySelector(".veau");
    var stoc = document.querySelector(".stoc");
    var stbaru = document.querySelector(".stbaru");
    var joli = document.querySelector(".joli");

    console.log(info);
    console.log(parts);
    console.log(infoautor);

    console.log(phbl);

    info.addEventListener("click", function () {
        infoaboutall.classList.remove("colordefault");
        infoaboutall.classList.add("fontcolortrue");

        infoautor.classList.remove("colordefault");
        infoautor.classList.add("fontcolortrue");


        phbl.classList.remove("fontcolortrue");
        phbl.classList.add("colordefault");

        bate.classList.remove("fontcolortrue");
        bate.classList.add("colordefault");

        stducr.classList.remove("fontcolortrue");
        stducr.classList.add("colordefault");

        diisun.classList.remove("fontcolortrue");
        diisun.classList.add("colordefault");

        veau.classList.remove("fontcolortrue");
        veau.classList.add("colordefault");

        stoc.classList.remove("fontcolortrue");
        stoc.classList.add("colordefault");

        stbaru.classList.remove("fontcolortrue");
        stbaru.classList.add("colordefault");

        joli.classList.remove("fontcolortrue");
        joli.classList.add("colordefault");
    });

    parts.addEventListener("click", function () {
        phbl.classList.remove("colordefault");
        phbl.classList.add("fontcolortrue");

        bate.classList.remove("colordefault");
        bate.classList.add("fontcolortrue");

        stducr.classList.remove("colordefault");
        stducr.classList.add("fontcolortrue");

        diisun.classList.remove("colordefault");
        diisun.classList.add("fontcolortrue");

        veau.classList.remove("colordefault");
        veau.classList.add("fontcolortrue");

        stoc.classList.remove("colordefault");
        stoc.classList.add("fontcolortrue");

        stbaru.classList.remove("colordefault");
        stbaru.classList.add("fontcolortrue");

        joli.classList.remove("colordefault");
        joli.classList.add("fontcolortrue");

        infoaboutall.classList.remove("fontcolortrue");
        infoaboutall.classList.add("colordefault");

        infoautor.classList.remove("fontcolortrue");
        infoautor.classList.add("colordefault");
    })
}