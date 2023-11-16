import UserGreeting from './UserGreeting';

function App() {
    return (
        <div className="App">
            <UserGreeting isLoggedIn={true} />
            <UserGreeting isLoggedIn={false} />
            <UserGreeting />
        </div>
    );
}

export default App;