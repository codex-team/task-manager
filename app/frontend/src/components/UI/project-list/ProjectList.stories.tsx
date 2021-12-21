import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectList from 'components/UI/project-list/ProjectList';
import ProjectListItem from 'components/UI/project-list/ProjectListItem';
import Sidebar from 'components/layouts/base/Sidebar';

export default {
  component: ProjectList,
} as ComponentMeta<typeof ProjectList>;

export const Empty: ComponentStory<typeof ProjectList> = (args) => <ProjectList {...args} />;

export const OneItem: ComponentStory<typeof ProjectList> = (args) => (
  <Sidebar>
    <ProjectList {...args}>
      <ProjectListItem key={"1"} title={'vc'} picture={'https://vc.ru/cover/fb/general/cover.jpg'}/>
    </ProjectList>
  </Sidebar>
);

export const ManyItems: ComponentStory<typeof ProjectList> = (args) => (
  <Sidebar>
    <ProjectList {...args}>
      <ProjectListItem key={"1"} title={'All projects'} />
      <ProjectListItem key={"2"} title={'Hawk'} picture={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHDBRoAMoZ_mga_JVM_Y1drzCF3yII75v4-gqJdueV-hBbhdOPOmAVedy3CbKUWqDfSs&usqp=CAU'}/>
      <ProjectListItem key={"3"} title={'Github Bot'} picture={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}/>
    </ProjectList>
  </Sidebar>
);

