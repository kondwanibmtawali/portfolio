import React, { useState, useEffect } from "react";
import {
    Main,
    Timeline,
    Expertise,
    Project,
    Contact,
    Football,
    Currently,
    Navigation,
    Footer,
} from "../src/components";
import FadeIn from './components/FadeIn';
import FootballJourney from './components/SoccerJourney';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [showJourney, setShowJourney] = useState(false);

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [showJourney]);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

            <FadeIn transitionDuration={700}>
                {showJourney ? (
                    <div id="soccer-journey">
                        <FootballJourney
                            onBack={() => setShowJourney(false)}
                            mode={mode}
                            modeChange={handleModeChange}
                        />
                    </div>
                ) : (
                    <>
                        <Main />
                        <Expertise />
                        <Timeline />
                        <Project />
                        <div id="soccer">
                            <Football onShowJourney={() => setShowJourney(true)} />
                        </div>
                        <div id="currently">
                            <Currently />
                        </div>
                        <Contact />
                    </>
                )}
            </FadeIn>

            <Footer />
        </div>
    );
}

export default App;