import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Section1.css';

const Section1 = () => {
  const currentIndexRef = useRef(0);
  const opacityWrappersRef = useRef([]);

  useEffect(() => {
    AOS.init();

    opacityWrappersRef.current = Array.from(
      document.getElementsByClassName('opacity-wrapper')
    );
  }, []);

  const changeOpacity = (direction) => {
    const opacityWrappers = opacityWrappersRef.current;
    let currentIndex = currentIndexRef.current;
  
    if (direction === 'down') {
      if (currentIndex < opacityWrappers.length - 1) {
        opacityWrappers[currentIndex].style.opacity = '1';
        opacityWrappers[currentIndex + 1].style.opacity = '1';
        currentIndex += 2;
      }
    } else if (direction === 'up') {
      if (currentIndex >= 2) {
        currentIndex -= 2;
        opacityWrappers[currentIndex].style.opacity = '0.2';
        opacityWrappers[currentIndex + 1].style.opacity = '0.2';
      }
    }
  
    currentIndexRef.current = currentIndex;
  };
  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        changeOpacity('down');
      } else if (event.key === 'ArrowUp') {
        changeOpacity('up');
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        changeOpacity('down');
      } else {
        changeOpacity('up');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="container">
        <div className="container2">
          <div className="textreveal">
            <div className="textreveal_inner">
              <div className="relative">
                <p className="text-white title-lead font-semibold leading-none absolute" style={{ whiteSpace: 'pre-line' }}>
                  <span className="opacity-wrapper">In</span>{' '}
                  <span className="opacity-wrapper">Chronicle</span>{' '}
                  <span className="opacity-wrapper">everything</span>{' '}
                  <span className="opacity-wrapper">is</span>{' '}
                  <span className="opacity-wrapper">made</span>{' '}
                  <span className="opacity-wrapper">with</span>{' '}
                  <span className="opacity-wrapper">Blocks</span>{' '}
                  <span className="opacity-wrapper">that</span>{' '}
                  <span className="opacity-wrapper">come</span>{' '}
                  <span className="opacity-wrapper">with</span>{' '}
                  <span className="opacity-wrapper">pixel</span>{' '}
                  <span className="opacity-wrapper">perfect</span>{' '}
                  <span className="opacity-wrapper">design,</span>{' '}
                  <span className="opacity-wrapper">interactivity</span>{' '}
                  <span className="opacity-wrapper">and</span>{' '}
                  <span className="opacity-wrapper">motion</span>{' '}
                  <span className="opacity-wrapper">out</span>{' '}
                  <span className="opacity-wrapper">of</span>{' '}
                  <span className="opacity-wrapper">the</span>{' '}
                  <span className="opacity-wrapper">box.</span>{' '}
                  <span className="opacity-wrapper">Instead</span>{' '}
                  <span className="opacity-wrapper">of</span>{' '}
                  <span className="opacity-wrapper">designing</span>{' '}
                  <span className="opacity-wrapper">from</span>{' '}
                  <span className="opacity-wrapper">scratch,</span>{' '}
                  <span className="opacity-wrapper">simply</span>{' '}
                  <span className="opacity-wrapper">choose</span>{' '}
                  <span className="opacity-wrapper">the</span>{' '}
                  <span className="opacity-wrapper">right</span>{' '}
                  <span className="opacity-wrapper">one</span>{' '}
                  <span className="opacity-wrapper">from</span>{' '}
                  <span className="opacity-wrapper">our</span>{' '}
                  <span className="opacity-wrapper">library</span>{' '}
                  <span className="opacity-wrapper">of</span>{' '}
                  <span className="opacity-wrapper">blocks</span>{' '}
                  <span className="opacity-wrapper">and</span>{' '}
                  <span className="opacity-wrapper">see</span>{' '}
                  <span className="opacity-wrapper">the</span>{' '}
                  <span className="opacity-wrapper">magic</span>{' '}
                  <span className="opacity-wrapper">unfold.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;