import React from 'react';
import {render} from '@testing-library/react';

import Gallery from './Gallery';

describe('Gallery', () => { 
    test('should render the Gallery', () => { 
        render(<Gallery label='Hello HI' />);
     })
 })