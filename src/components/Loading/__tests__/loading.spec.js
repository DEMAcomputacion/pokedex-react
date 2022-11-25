import {screen, render} from '@testing-library/react'
import Loading from '../Loading'

test("Prueba que se renderize el componente", () =>{
   const {container } = render(<Loading />)
   const spinnerContainer = container.getElementsByClassName('spinner-container');
   expect(spinnerContainer.length).toBe(1)
   const loadingSpinner = container.getElementsByClassName('loading-spinner');
   expect(loadingSpinner.length).toBe(1)
})