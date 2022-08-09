
function Header({onDarkModeClick, appState}) {

    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {appState ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header