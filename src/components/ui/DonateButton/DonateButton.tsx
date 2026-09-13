import { Button, type ButtonProps } from '@/components/ui/Button/Button';
import { openWhatsApp } from '@/utils/whatsapp';

const DONATE_MESSAGE = 'Donation / General Support';

export interface DonateButtonProps extends Omit<ButtonProps, 'variant' | 'children' | 'onClick'> {
  onClick?: () => void;
}

export function DonateButton({ onClick, ...rest }: DonateButtonProps) {
  const handleClick = () => {
    onClick?.();
    openWhatsApp(DONATE_MESSAGE);
  };

  return (
    <Button {...rest} variant="gold" onClick={handleClick}>
      DONATE
    </Button>
  );
}
