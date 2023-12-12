import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrophy } from '@fortawesome/free-solid-svg-icons';

const ProgressBar = () => {
  const stages = [
    { name: 'Digital BC', color: '#FEF08B' },
    { name: 'Visit Recap', color: '#FED6A9' },
    { name: 'First Check In', color: '#F5D2FE' },
    { name: 'Reconnect', color: '#BAE5FD' },
    { name: 'Completed', color: '#006601' },
  ];

  const greenColor = '#006601';
  const grayColor = '#E1E1E1';
  const gray700 = '#626366';

  const [currentStage, setCurrentStage] = useState(0);
  const [completedStage, setCompletedStage] = useState(0);

  const handleStageClick = (index) => {
    setCurrentStage(index);
    if(currentStage<index && completedStage < index) {
      setCompletedStage(index)
    }
  };

  return (
    <div style={{height: '180px', margin: '20px', paddingTop: '12px', borderRadius: '10px',border: `solid ${grayColor} 1px`}}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {stages.map((stage, index) => (
          <div
            key={index}
            onClick={() => handleStageClick(index)}
            style={{
              cursor: 'pointer',
              position: 'relative',
              width: '20%',
              flexDirection: 'column',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <div
              style={{
                backgroundColor: completedStage > index ? greenColor : currentStage === index ? stage.color : 'gray',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                zIndex: 10,
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: completedStage > index ? 'white' : currentStage !== completedStage ? 'white' : 'black',
              }}
            >
              {completedStage > index ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (index + 1) === stages.length  ? (<FontAwesomeIcon color={completedStage + 1 === stages.length ? 'white': 'black'} icon={faTrophy} />) : (
                index + 1
              )}
            </div>
            <div style={{ 
              height: '50px',
              backgroundColor: index + 1 === stages.length ? 'white' : currentStage === index? stage.color: 'white',
              marginTop: '-10px',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              border: currentStage === index? 'solid black 1px' : 'solid #E1E1E1 1px',
              borderBottom: currentStage === index? 'unset' : 'solid black 1px',
               }}>
              {stage.name}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          backgroundColor: '#006601',
          height: '5px',
          marginTop: '-55px',
          width: `${((completedStage + 1) * (100/ stages.length)-50 / stages.length)}%`,
          transition: 'width 0.5s ease',
        }}
      />
      <div
        style={{
          backgroundColor: 'gray',
          height: '5px',
          marginTop: '-6px',
          zIndex: '-10',
          position: 'relative',
          width: `${100-(50 / stages.length)}%`
        }}
      />
      <div style={{gap: '16px', padding: '10px', marginTop: '70px',display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{justifyContent: 'left', display: 'flex', color: gray700}}>
          { `Stage: ${stages[currentStage].name}`}
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div>Status Badge</div>
          <div>{ `Due date: ${stages[currentStage].dueDate}`}</div>
          <div><button>View Status</button></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

