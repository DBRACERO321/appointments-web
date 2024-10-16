export interface PrimaryButtonProps {
    label: string;
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
  }