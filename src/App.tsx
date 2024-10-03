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
                <td><img className="Profileimage1" src={profile1} alt="areg"/>
                    <div className="textprofile1"><h2>Areg</h2></div>
                </td>
                <td><img className="Profileimage2" src={profile2} alt="leon"/>
                    <div className="textprofile1"><h2>1Leon</h2></div>
                </td>
                <td><img className="Profileimage3" src={profile3} alt="veyshal"/>
                    <div className="textprofile1"><h2>Veyshal</h2></div>
                </td>
            </tr>
        </div>
        </body>
    </>

    )
}

export default App
