import useWindowSize from 'hooks/useWindowSize';
import React from 'react';
import styles from './style.module.css';
type props = {
  toggle: boolean;
};
function SideNav({ toggle }: props) {
  const { width } = useWindowSize();
  return (
    <div
      className={styles.sidenav}
      style={{
        width: width > 1184 ? '250px' : toggle ? '250px' : 0,
        //marginLeft: width > 1184 ? '250px' : 0,
      }}
    >
      <h1>8Door</h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, natus, cumque doloremque
      repellat explicabo quibusdam debitis veniam odio accusamus inventore saepe quisquam quam!
      Libero blanditiis, magnam vel sint minima corrupti assumenda amet facere? Laudantium nisi ex
      quisquam culpa voluptatibus quia facere harum modi totam voluptate. Corporis earum explicabo
      voluptates tempora qui, quasi unde mollitia aperiam error repudiandae quis sunt perspiciatis
      laudantium et deleniti iste iure laborum. Dignissimos iste veniam quam voluptas quas, sunt
      vero ipsa omnis totam. Adipisci maiores perferendis eveniet quasi, deserunt, sunt, eos sint
      explicabo illo possimus earum ipsum doloremque. Sequi explicabo quibusdam ea laudantium
      officiis, suscipit sunt saepe repellat ullam? Culpa incidunt minus libero voluptatum
      praesentium at sit, voluptas labore rem excepturi explicabo alias. Veritatis eligendi
      asperiores adipisci, quis dolores aperiam corporis hic ut sed, ipsa numquam distinctio? Fugit
      magnam tenetur facere amet, atque nulla animi voluptates accusantium architecto. Blanditiis
      quasi odio excepturi corporis quam laborum. Earum odit, porro iste aliquam a quaerat
      exercitationem velit ex fugit quidem itaque sapiente perferendis quia eligendi odio
      recusandae, quis explicabo aut optio iure corporis obcaecati sunt deleniti? Accusamus iure
      non, consectetur consequuntur, similique omnis cupiditate, in cumque voluptatum expedita
      debitis? Vitae hic doloribus dolor consequuntur officia reprehenderit voluptatibus blanditiis
      dolore?
    </div>
  );
}

export default SideNav;
