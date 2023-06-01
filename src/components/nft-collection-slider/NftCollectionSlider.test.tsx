import React from 'react';
import {render} from '@testing-library/react';

import Gallery from './dasd';

describe('Gallery', () => { 
    test('should render the Gallery', () => { 
        render(<Gallery label='Hello HI' />);
     })
 })