const dateEL = $("#currentDay");
const heading = moment().format("dddd,MMMM Do");
const hours = ["El9", "El10", "El11", "El12", "El13", "El14", "El15", "El16"];
dateEL.text(heading);
const El9 = $("#9");
const btn9 = $("#9btn");
const El10 = $("#10");
const btn10 = $("#10btn");

const El11 = $("#11");
const btn11 = $("#11btn");

const El12 = $("#12");
const btn12 = $("#12btn");

const El13 = $("#13");
const btn13 = $("#13btn");

const El14 = $("#14");
const btn14 = $("#14btn");

const El15 = $("#15");
const btn15 = $("#15btn");

const El16 = $("#16");
const btn16 = $("#16btn");

let getid = 1;
const el = $("li:eq(2)");
const mybtn = $("ul:first").children();

//el.addClass("active")
//mybtn.addClass("active");
let editing;
const runsave = (event) => {
    // store to localstorage
    // editing = false;
};

const now = new Date();
const HR = now.getHours();
//HR = 11;
hours.map((e) => {
    const H = e.substr(2);

    const ELM = eval(e);
    if (HR == H) {
        ELM.addClass("bg-danger");
    }
    if (H < HR) {
        ELM.addClass("bg-warning");
    }
    if (H > HR) {
        ELM.addClass("bg-success");
    }
});

hours.map((e) => {
    const ELM = eval(e);
    const storage = localStorage.getItem(e);

    ELM.text(storage);
});

const editevent = (id, btn) => {
    // do not edit if time has already passed
    const H = id.substr(2);

    if (H > HR) {
        editing = true;
        const EL = eval(id);
        const savebtn = eval(btn);
        savebtn.on("click", () => {
            // localStorage.setItem("obj.time", obj.events)
            const value = EL.find("input").val();
            // const time =

            localStorage.setItem(id, value);
            EL.removeClass("active");
            EL.find("input").remove();
            editing = false;
            location.reload()
        });

        EL.addClass("active");
        EL.append(
            '<input autofocus input-group-sm  class="bg-primary text-light form-control " type="text" value=" "> '
        );
    } else {
        alert(" This time has already passed ");
    }

    // const myinput = $(EL).children().val();

    // console.log("myinput", myinput);
};

El9.on("click", () => {
    if (!editing) {
        editevent("El9", "btn9");
    } else {
        console.log("already editing");
    }
});
El10.on("click", () => {
    if (!editing) {
        editevent("El10", "btn10");
    } else {
        console.log("already editing");
    }
});
El11.on("click", () => {
    if (!editing) {
        editevent("El11", "btn11");
    } else {
        console.log("already editing");
    }
});
El12.on("click", () => {
    if (!editing) {
        editevent("El12", "btn12");
    } else {
        console.log("already editing");
    }
});
El13.on("click", () => {
    if (!editing) {
        editevent("El13", "btn13");
    } else {
        console.log("already editing");
    }
});
El14.on("click", () => {
    if (!editing) {
        editevent("El14", "btn14");
    } else {
        console.log("already editing");
    }
});
El15.on("click", () => {
    if (!editing) {
        editevent("El15", "btn15");
    } else {
        console.log("already editing");
    }
});

El16.on("click", () => {
    if (!editing) {
        editevent("El16", "btn16");
    } else {
        console.log("already editing");
    }
});

// El10.addClass("active");
//     console.log("You clicked 10");

//     El10.addClass("form-control bg-primary input-lg")
//     El10.append('<input class="input-lg  "/>')