function attachEventsListeners() {
    document.querySelector('#convert').addEventListener('click', onClick);

    const ratio = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,

    }

    function onClick() {
        const input = document.querySelector('#inputDistance').value;
        const inputUnit = document.querySelector('#inputUnits').value;
        const output = document.querySelector('#outputDistance');
        const outputUnit = document.querySelector('#outputUnits').value;

        const inMeters = input * ratio[inputUnit];
        const result = inMeters / ratio[outputUnit];

        output.value = result;
     

    }

}