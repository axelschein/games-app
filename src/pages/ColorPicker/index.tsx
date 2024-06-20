import {useState} from 'react';

// type Props = {}

const ColorPicker = () => {
    const [color, setColor] = useState<string>('ffffff');
    const [result, setResult] = useState<string | undefined>(undefined)
    const [btnArr, setBtnArr ] = useState<string[]>(['ffffff','ffff00','ffff01'])


    const arr = [ '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

    const generatedRandomColor = () =>  {
        const newColor = new Array(6)
            .fill('')
            .map(()=> arr[Math.floor(Math.random() * arr.length)])
            .join('');
            generateBtnColorsChoices(newColor)
            return setColor(newColor)
    }

    const generateBtnColorsChoices = (newColor: string) => {

        setResult(undefined)
        const ColorOne = new Array(6)
            .fill('')
            .map(()=> arr[Math.floor(Math.random() * arr.length)])
            .join('');
        const ColorTwo = new Array(6)
            .fill('')
            .map(()=> arr[Math.floor(Math.random() * arr.length)])
            .join('');
        const BtnArr = [newColor, ColorOne, ColorTwo];
        setBtnArr(BtnArr);
    }

    const shuffle = (array: string[]):string[] => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array; 
    }; 

    console.log(shuffle(btnArr))
    
    const handleOnClick = (e:string): void => {
        if (e === color) {
            setResult('You Won!')
        } else {
            setResult('You Loose!')
        }
    }



  return (
    <div className='colorPicker'>
        <h1>Guess the color!</h1>
        <div className='colorContainer' style={{ backgroundColor: `#${color}`}}>{color}</div>
        <button onClick={generatedRandomColor}>Next Color</button>
        <div className='btnContainer'>
            {!result && btnArr.map( e => 
                <>
                    <button type='button' onClick={() => handleOnClick(e)}> Color: #{e} </button>
                </>


            )}
        </div>
        <div>{result && result}</div>
    </div>
  )
}

export default ColorPicker;