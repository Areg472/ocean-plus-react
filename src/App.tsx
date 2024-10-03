import './App.css';
import profile1 from './pictures/areg profile icon.jpg'
import profile2 from './pictures/leon profile icon.jpg'
import profile3 from './pictures/veysshal profile icon.jpg'

function App() {
    return (
    <>
        <head>
            <title>Ocean plus</title>
        </head>
        <body className="body">
        <div className="Headings">
            <h1>The new vyond streaming website</h1>
            <h2>Made by your favorite creators!</h2>
            <tr className="Imagesprofile">
                <td className="Profileimage1"><img src={profile1} alt="areg"/></td>
                <td className="Profileimage2"><img src={profile2} alt="leon"/></td>
                <td className="Profileimage3"><img src={profile3} alt="veyshal"/></td>
            </tr>
        </div>
        </body>
    </>

    )
}

export default App
