"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Karsten!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen()
{
    let firstName = "Karsten";
    console.log("Hallo " + firstName + "!");

}

// console.log(firstName); // Fehler: Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Asad"); // call + Argument(e)
// ausgabeNamenParam("Roxana");
// ausgabeNamenParam("Sven");
// Argumente sind Daten für Parameter

    function ausgabeNamenParam(firstName) // Parameter
{
    console.log("Hallo " + firstName + "!");
}

// ausgabeNamenParams( "Dave", "Batista");
// ausgabeNamenParams("Jamshid", "Rahmanzai");
// ausgabeNamenParams(prompt("Vorname?"), prompt("Nachname?"));

function ausgabeNamenParams(firstName, familyName) 
{
    console.log("Hallo " + firstName +" " + familyName + "!");
}


/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

output(getString("Maxine", "Mützerich"));
output(getString(prompt("Vorname?"), prompt("Nachname?")))

function getString(firstName, familyName) 
{
    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    return outputStr; // return sendet Daten an den call zurück
    console.log(outputStr); //return bricht die Funktion ab!
}
/***** Funktionen 03b *****/
// Trennen der Funktionalitäten in Funktionen| return


// 2. Funktionalität: string output
// output("Hi");
// output(2);
// output(true);
function output(outputData) 
{
    console.log(outputData);
}


