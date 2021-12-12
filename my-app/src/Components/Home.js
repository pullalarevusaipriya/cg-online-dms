const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url("  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24tomuYU-xTCg8t4DMWqDB9PPhHMx33iue7X30-IGRxrw5OMgYQeGBo5NO3RO13yRroU&usqp=CAU")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'cover',
            }}>
            <div className="container"
                style={{ height: "100vh" }}
            >
                <h1 className="display-4 text-primary  pt-5">Welcome to Online dairy</h1>
                <p>Capgemini trainees, especially those who are from Oct 12 batch3 are really very genious!</p>
            </div>

            {/* <div >
                <img width="100%" src="https://miro.medium.com/max/8420/1*Jq9zkjx65HKizHjXSas51g.png" alt="development"></img>
                <img width="100%" src="https://www.contentgrip.com/content/images/wordpress/2021/03/capgemini-FI-1.jpg" alt="Capgemini Office"></img>
            </div> */}

        </div>

    );
}

export default Home;