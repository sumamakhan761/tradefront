import React from 'react';

function Team() {
  return (
    <div className='container'>
      <div className='row p-3 mb-5 border-top'>
        <h1 className='text-center '>People</h1>
      </div>
      <div className='row p-3 mt-5 ' style={{ lineHeight: "1.7", fontSize: "1.05em" }}>
        <div className='col-1'></div>
        <div className='col-5 text-center'>
          <img src='media/images/sumama.jpg' style={{ borderRadius: "100%", width: "58%" }} />
          <h4 className='mt-3'>Sumama khan</h4>
          <h6 className='mt-2 text-muted'>Founder, CEO</h6>
        </div>
        <div className='col-5 mt-3'>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

          <p>Playing basketball is his zen.</p>

          <p >Connect on <a style={{ textDecoration: "none" }} href='/'>Homepage / </a> <a href='https://tradingqna.com/u/nithin/summary' style={{ textDecoration: "none" }}>TradingQnA / </a> <a href='https://x.com/sumamakhan761' style={{ textDecoration: "none" }}>Twitter</a></p>
        </div>
        <div className='col-1'></div>
      </div>

    </div >
  );
}

export default Team;