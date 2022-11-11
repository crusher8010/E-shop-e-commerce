import {Button} from "@chakra-ui/react"

function Pagination({onChange, current}) {
    const prev = <Button mr={4} colorScheme={"blue"} disabled = {current == 1} onClick={() => onChange(-1)}>PREV</Button>;
    const currentPage = <Button mr={4}>{current}</Button>;
    const next = <Button colorScheme={"blue"} onClick={() => onChange(1)}>NEXT</Button>;
    
    return (
      <div data-testid="pagination-container">
        {prev}
        {currentPage}
        {next}
      </div>
    );
  }
  
  export default Pagination;