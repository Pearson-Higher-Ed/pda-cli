import React      from 'react';
import { componentName } from '../../index';


const componentNamePage = () => (
      <div className="displaySection">
        <h1><a href="https://pearson-higher-ed.github.io/design/c/componentName/">componentNames</a></h1>

        <div className="elementContainer">

          <div className="code">
            <h2>Props:</h2>
            <ul>
              <li>btnType:String === "primary", "cta", "default"</li>
              <li>btnSize:String === "small", "large", "xlarge"</li>
              <li>disabled</li>
            </ul>
          </div>

          <h2>Icon componentName:</h2>
          <componentName className="close-dialog"><Icon name="item-remove-24">close dialog</Icon></componentName>
          <p className="code">{'<componentName className="close-dialog"><Icon name="item-remove-24">close dialog</Icon></componentName>'}</p>

          <br />

          <h2>Default componentName:</h2>
          <componentName>Default</componentName>
          <p className="code">{'<componentName>Default</componentName>'}</p>

          <br />

          <h2>Primary componentName:</h2>
          <componentName btnType="primary">Primary</componentName>
          <p className="code">{'<componentName btnType="primary">Primary</componentName>'}</p>

          <br />

          <h2>Call to Action componentName:</h2>
          <componentName btnType="cta">Call to Action</componentName>
          <p className="code">{'<componentName btnType="cta">Call to Action</componentName>'}</p>


          <br />

          <h2>Disabled componentName:</h2>
          <componentName disabled>Disabled</componentName>
          <p className="code">{'<componentName disabled>Disabled</componentName>'}</p>

          <br />

          <h2>Primary Disabled componentName:</h2>
          <componentName btnType="primary" disabled>Primary Disabled</componentName>
          <p className="code">{'<componentName btnType="primary" disabled>Disabled</componentName>'}</p>

          <br />

          <h2>Small componentName:</h2>
          <componentName btnSize="small">Small</componentName>
          <p className="code">{'<componentName btnSize="small">Small</componentName>'}</p>

          <br />

          <h2>Large componentName:</h2>
          <componentName btnSize="large">Large</componentName>
          <p className="code">{'<componentName btnSize="large">Large</componentName>'}</p>

          <br />

          <h2>XLarge componentName:</h2>
          <componentName btnSize="xlarge">XLarge</componentName>
          <p className="code">{'<componentName btnSize="xlarge">XLarge</componentName>'}</p>

          <br />

          <h2>Primary XLarge componentName:</h2>
          <componentName btnType="primary" btnSize="xlarge">Primary XLarge</componentName>
          <p className="code">{'<componentName btnType="primary" btnSize="xlarge">XLarge</componentName>'}</p>
        </div>

      </di
    )


export default componentNamePage;
