import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Image from './Image'

function Documentation() {
    return (
        <div id="docs">
            <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#documentation-icon"></use>
            </svg>
            <h2>Documentation</h2>
            <p>Your questions, answered</p>
            <ul>
                <li>
                    <a href="https://vite.dev/" target="_blank">
                        {/* <img  alt="" /> */}
                        <Image className="logo" src={viteLogo} />
                        Explore Vite
                    </a>
                </li>
                <li>
                    <a href="https://react.dev/" target="_blank">
                        <img className="button-icon" src={reactLogo} alt="" />
                        Learn more
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Documentation