import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DiffViewer from './diff_viewer.jsx';
import CourseUtils from '../../utils/course_utils.js';

const Revision = ({ revision, wikidataLabel, course }) => {
  const ratingClass = `rating ${revision.rating}`;
  const ratingMobileClass = `${ratingClass} tablet-only`;
  const formattedTitle = CourseUtils.formattedArticleTitle({ title: revision.title, project: revision.wiki.project, language: revision.wiki.language }, course.home_wiki, wikidataLabel);

  return (
    <tr className="revision">
      <td className="tooltip-trigger desktop-only-tc">
        <p className="rating_num hidden">{revision.rating_num}</p>
        <div className={ratingClass}><p>{revision.pretty_rating || '-'}</p></div>
        <div className="tooltip dark">
          <p>{I18n.t(`articles.rating_docs.${revision.rating || '?'}`, { class: revision.rating || '' })}</p>
        </div>
      </td>
      <td>
        <div className={ratingMobileClass}><p>{revision.pretty_rating || '-'}</p></div>
        <a href={revision.article_url} target="_blank" className="inline"><p className="title">{formattedTitle}</p></a>
      </td>
      <td className="desktop-only-tc">{revision.revisor}</td>
      <td className="desktop-only-tc">{revision.characters}</td>
      <td className="desktop-only-tc date"><a href={revision.url}>{moment(revision.date).format('YYYY-MM-DD   h:mm A')}</a></td>
      <td>
        <DiffViewer
          index={this.props.index}
          revision={this.props.revision}
          editors={[this.props.revision.revisor]}
          articleTitle={this.props.revision.title}
          setSelectedIndex={this.props.setSelectedIndex}
          lastIndex={this.props.lastIndex}
          selectedIndex={this.props.selectedIndex}
        />
      </td>
    </tr>
  );
};

Revision.propTypes = {
  revision: PropTypes.object,
  index: PropTypes.number,
  wikidataLabel: PropTypes.string,
  course: PropTypes.object,
  setSelectedIndex: PropTypes.func,
  lastIndex: PropTypes.number,
  selectedIndex: PropTypes.number
};

export default Revision;
