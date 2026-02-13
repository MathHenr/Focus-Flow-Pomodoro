// import radix component
import { Popover } from 'radix-ui';

type SettingsButtonProps = {
  children: React.ReactNode;
};

export function SettingsButton({ children }: SettingsButtonProps) {
  return (
    <Popover.Root>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <>
            <h1>Popover</h1>
          </>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
