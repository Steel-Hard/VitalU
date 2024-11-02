import { FlexDiv } from "../index";
import { StlInput } from "../Inputs/Input";

interface CampformProps {
  label: string;
  placeholder: string;
  funcState: (value: number | string) => void;
  type?: "weight" | "height" | "date" | "number";
}

export default function Campform(props: CampformProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    switch (props.type) {
      case "weight":
      case "number":
        const numValue = parseFloat(value);
        if (!isNaN(numValue) && numValue > 0) {
          props.funcState(numValue);
        }
        break;
      case "height":
        // Remove qualquer ponto ou vírgula da entrada para o campo de altura
        value = value.replace(/[.,]/g, "");
        const heightValue = parseInt(value, 10);
        if (!isNaN(heightValue) && heightValue > 0) {
          props.funcState(heightValue);
        }
        break;
      case "date":
        props.funcState(value);
        break;
      default:
        props.funcState(value);
    }
  };

  const getInputType = () => {
    switch (props.type) {
      case "weight":
      case "height":
        return "number";
      case "date":
        return "date";
      default:
        return "text";
    }
  };

  const getMinMax = () => {
    switch (props.type) {
      case "weight":
        return { min: 0.1, max: 500 }; // Minimum weight 0.1kg, maximum 500kg
      case "height":
        return { min: 1, max: 300 }; // Minimum height 1cm, maximum 300cm
      case "date":
        return { min: "1940-01-01", max: "2025-12-31" };
      default:
        return {};
    }
  };

  const { min, max } = getMinMax();

  return (
    <FlexDiv direction="column">
      <label>{props.label}</label>
      <StlInput
        placeholder={props.placeholder}
        height="50px"
        type={getInputType()}
        onChange={handleChange}
        min={min}
        max={max}
        step={
          props.type === "weight"
            ? "0.1"
            : props.type === "height"
            ? "1"
            : undefined
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (
            (props.type === "weight" ||
              props.type === "height" ||
              props.type === "number") &&
            (e.key === "-" ||
              e.key === "e" ||
              (e.key === "0" && (e.target as HTMLInputElement).value === ""))
          ) {
            e.preventDefault();
          }
        }}
      />
    </FlexDiv>
  );
}
