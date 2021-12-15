import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProjectList from 'components/UI/project-list/ProjectList';
import ProjectListItem from 'components/UI/project-list/components/ProjectListItem';
import Sidebar from "../../layouts/base/Sidebar";

export default {
  component: ProjectList,
} as ComponentMeta<typeof ProjectList>;

export const Empty: ComponentStory<typeof ProjectList> = (args) => <ProjectList {...args} />;

export const OneItem: ComponentStory<typeof ProjectList> = (args) => (
  <Sidebar>
    <ProjectList {...args}>
      <ProjectListItem projectTitle={'vc'} projectPicture={'https://vc.ru/cover/fb/general/cover.jpg'}/>
    </ProjectList>
  </Sidebar>
);

export const ManyItems: ComponentStory<typeof ProjectList> = (args) => (
  <Sidebar>
    <ProjectList {...args}>
      <ProjectListItem projectTitle={'All projects'} />
      <ProjectListItem projectTitle={'Hawk'} projectPicture={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHDBRoAMoZ_mga_JVM_Y1drzCF3yII75v4-gqJdueV-hBbhdOPOmAVedy3CbKUWqDfSs&usqp=CAU'}/>
      <ProjectListItem projectTitle={'Github Bot'} projectPicture={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}/>
    </ProjectList>
  </Sidebar>
);

