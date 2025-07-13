  const numcheck =true;
  const specialchcheck=true;
  const length = 10;

  const isChecked = true;

  function passGenerator () {
    <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
    console.log(isChecked);
  }

  passGenerator();