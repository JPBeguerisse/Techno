const Home = () => {
    return ( 
        <div className="home">
            <h1>My progression</h1>
            <div>Welcome to this site devoted to your programming progression</div>
            {
                new Date().toISOString()
            }
        </div>

     );
}
 
export default Home;