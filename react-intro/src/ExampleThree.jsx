/**
 * what if other props are also there like:
 * user / language / notification
 */
function ExampleThree(props) {
    return (
        <Layout theme={props.theme} />
    )
}

function Layout(props) {
    return (
        <Sidebar theme={props.theme} />
    )
}

function Sidebar(props) {
    return (
        <ToggleTheme theme={props.theme} />
    )
}

function ToggleTheme(props) {
    // props.theme = 'light'
    return (
        <>
            Current Theme: {props.theme}
            <button>Switch Theme</button>
        </>
    )
}

export default ExampleThree