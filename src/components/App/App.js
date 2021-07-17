import Provider from '../Provider/Provider';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../Header/Header';

const App = () => {
    return (
        <Provider>
            <Wrapper>
                <Header />
            </Wrapper>
        </Provider>
    );
};

export default App;
