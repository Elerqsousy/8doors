import classNames from 'classnames';

type Props = {
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
};

export function Table({
  title,
  subtitle,
  className = '',
}: Props) {
  return (
    <div>
      table
    </div>
  );
}
