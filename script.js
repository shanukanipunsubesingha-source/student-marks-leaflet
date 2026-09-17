

const studentInputs =
    document.getElementById("studentInputs");


for (let i = 1; i <= 10; i++) {

    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>${i}</td>

        <td>

            <input
                type="text"
                id="index${i}"
                placeholder="Index"
            >

        </td>

        <td>

            <input
                type="text"
                id="name${i}"
                placeholder="Name"
            >

        </td>

        <td>

            <input
                type="number"
                id="marks${i}"
                placeholder="Marks"
                min="0"
                max="100"
            >

        </td>

    `;


    studentInputs.appendChild(row);
}



// ========================================
// BACKGROUND IMAGE
// ========================================

const backgroundImage =
    document.getElementById("backgroundImage");


backgroundImage.addEventListener(
    "change",
    function () {

        const file = this.files[0];


        if (!file) {

            return;

        }


        const reader =
            new FileReader();


        reader.onload =
            function (event) {

                const leaflet =
                    document.getElementById("leaflet");


                leaflet.style.backgroundImage =
                    `url("${event.target.result}")`;

            };


        reader.readAsDataURL(file);

    }
);



// ========================================
// FONT SELECTION
// ========================================

const fontType =
    document.getElementById("fontType");


fontType.addEventListener(
    "change",
    function () {

        const leaflet =
            document.getElementById("leaflet");


        leaflet.style.fontFamily =
            this.value;

    }
);



// ========================================
// HEADING COLOUR
// ========================================

const headingColor =
    document.getElementById("headingColor");


headingColor.addEventListener(
    "input",
    function () {

        const heading =
            document.getElementById(
                "leafletHeading"
            );


        heading.style.color =
            this.value;

    }
);



// ========================================
// GENERATE LEAFLET
// ========================================

function generateLeaflet() {

    const resultTable =
        document.getElementById(
            "resultTable"
        );


    resultTable.innerHTML = "";


    // Get selected colours

    const nameColor =
        document.getElementById(
            "nameColor"
        ).value;


    const indexColor =
        document.getElementById(
            "indexColor"
        ).value;


    const marksColor =
        document.getElementById(
            "marksColor"
        ).value;


    const headingColor =
        document.getElementById(
            "headingColor"
        ).value;


    // Apply heading colour

    document.getElementById(
        "leafletHeading"
    ).style.color = headingColor;



    // Apply font

    document.getElementById(
        "leaflet"
    ).style.fontFamily =
        document.getElementById(
            "fontType"
        ).value;



    // Create 10 results

    for (let i = 1; i <= 10; i++) {


        const index =
            document.getElementById(
                `index${i}`
            ).value;


        const name =
            document.getElementById(
                `name${i}`
            ).value;


        const marks =
            document.getElementById(
                `marks${i}`
            ).value;



        const row =
            document.createElement("div");


        row.className =
            "result-row";



        row.innerHTML = `

            <span
                style="color: ${nameColor};"
            >
                ${name}
            </span>


            <span
                style="color: ${indexColor};"
            >
                ${index}
            </span>


            <span
                style="color: ${marksColor};"
            >
                ${marks}
            </span>

        `;


        resultTable.appendChild(row);

    }



    // Show download button

    document.getElementById(
        "downloadButton"
    ).style.display = "block";

}



// ========================================
// DOWNLOAD PNG
// ========================================

function downloadPNG() {

    const leaflet =
        document.getElementById(
            "leaflet"
        );


    html2canvas(
        leaflet,
        {

            /*
              Higher scale = clearer PNG
            */

            scale: 2,

            useCORS: true,

            backgroundColor: null

        }

    ).then(
        function (canvas) {


            const link =
                document.createElement("a");


            link.download =
                "student-marks-leaflet.png";


            link.href =
                canvas.toDataURL(
                    "image/png"
                );


            link.click();

        }
    );

}








