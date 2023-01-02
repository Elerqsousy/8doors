import classNames from 'classnames';

type Props = {
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  img?: string | null | undefined;
  className?: string;
};

export function UserTemplate({title, subtitle, img = null}: Props) {
  return (
    <div>
      user
    </div>
  );
}
